
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { FileUploader } from '@/components/ui/file-uploader';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { IBrand } from '@/schema/brand';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useBrandApi } from '../brand.service';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useState } from 'react';
import { Loader } from 'lucide-react';

const MAX_FILE_SIZE = 1000000;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp'
];

const formSchema = z.object({
  image: z
    .any()
    .refine((files) => files?.length == 1, 'Image is required.')
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 1MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      '.jpg, .jpeg, .png and .webp files are accepted.'
    ),
  name: z.string().min(2, {
    message: 'Brand name must be at least 2 characters.'
  }),
  code: z.string().min(2, {
    message: 'Brand code must be at least 2 characters.'
  }),
  status: z.string().min(2, {
    message: 'Brand slug must be at least 2 characters.'
  }),
  slug: z.string().min(2, {
    message: 'Brand slug must be at least 2 characters.'
  }),
  featured: z.boolean(),
});

type formValues = z.infer<typeof formSchema>;


export default function BrandForm({
  initialData,
}: {
  initialData: IBrand | null;
}) {

  const navigate = useNavigate();
  const brandApi = useBrandApi();
  const [loading, setLoading] = useState(false)

  const form = useForm<formValues>({
    resolver: zodResolver(formSchema),
    values: initialData ?? {
      code: '',
      status: '',
      name: '',
      slug: '',
      featured: false,
    }
  });

  const title = initialData ? 'Edit Brand' : 'Create Brand';
  const description = initialData ? 'Update brand' : 'Adding new brand';
  const toastMessage = initialData ? 'Brand updated' : 'Brand created';
  const action = initialData ? 'Save changes' : 'Create';


  async function onSubmit(data: formValues) {
    // Form submission logic would be implemented here
    setLoading(true);

    const dd = {
      code: data.code,
      status: data.status,
      name: data.name,
      slug: data.slug,
      featured: data.featured
    };

    const formData = new FormData();
    formData.append('data', JSON.stringify(dd));
    formData.append("file", data.image[0]);

    if (initialData) {
      try {
        await brandApi.putBrand(initialData.id, formData).then((res) => res.data);
        toast.success(toastMessage);
        navigate(-1); // or navigate("/your-route")
        setLoading(false);
      } catch (error) {
        toast.error("Failed to update brand");
        setLoading(false);
      }
    } else {
      try {
        await brandApi.postBrand(formData).then((res) => res.data);
        toast.success(toastMessage);
        navigate(-1); // or navigate("/your-route")
        setLoading(false);
      } catch (error) {
        toast.error("Failed to create brand");
        setLoading(false);
      }
    } 
  }

  return (
    <Card className='mx-auto max-w-3xl'>
      <CardHeader>
        <CardTitle className='text-left text-2xl font-bold'>
          {title}
        </CardTitle>
        <Label className='text-muted-foreground'>{description}</Label>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField
              control={form.control}
              name='image'
              render={({ field }) => (
                <div className='space-y-6'>
                  <FormItem className='w-full'>
                    <FormLabel>Images</FormLabel>
                    <FormControl>
                      <FileUploader
                        value={field.value}
                        onValueChange={field.onChange}
                        maxFiles={1}
                        maxSize={1 * 1024 * 1024}
                        disabled={loading}
                      // progresses={progresses}
                      // pass the onUpload function here for direct upload
                      // onUpload={uploadFiles}
                      // disabled={isUploading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              <FormField
                control={form.control}
                name='code'
                disabled={loading}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Code<span className="text-red-600">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder='Enter brand code' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='name'
                disabled={loading}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name<span className="text-red-600">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder='Enter brand name' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='status'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status<span className="text-red-600">*</span></FormLabel>
                    <Select
                      disabled={loading}
                      onValueChange={(value) => field.onChange(value)}
                      value={field.value}
                    >
                      <FormControl className='w-full'>
                        <SelectTrigger>
                          <SelectValue placeholder='Select Status' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value='PRIVATE'>Private</SelectItem>
                        <SelectItem value='PUBLIC'>Public</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='slug'
                disabled={loading}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Slug<span className="text-red-600">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder='Brand Slug' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="featured"
                disabled={loading}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Featured<span className="text-red-600">*</span></FormLabel>
                    <FormControl>
                      <div className="items-top flex space-x-2 py-3 rounded-md ">
                        <Checkbox id="featured" checked={field.value} disabled={loading}
                          onCheckedChange={(checked) => field.onChange(checked)}
                        />
                        <div className="grid gap-1.5 leading-none">
                          <Label
                            htmlFor={`featured`}
                          >
                            Is this featured brand?
                          </Label>
                        </div>
                      </div>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

            </div>
            <Button disabled={loading} type='submit'>{loading &&
              <Loader className="animate-spin h-5 w-5 mr-3" />}
              {action}</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
