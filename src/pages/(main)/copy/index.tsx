import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, CreditCard, Database, Package, Send, Settings, ShoppingCart, Upload, User } from "lucide-react";
import { useRef, useState } from "react";


interface ChatMessage {
  id: string
  type: "user" | "assistant"
  content: string
  timestamp: Date
}


export function Component() {

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      type: "assistant",
      content: "Hello! I can help you work with your Excel data. What would you like to do?",
      timestamp: new Date(),
    },
    {
      id: "2",
      type: "assistant",
      content: "Hello! I can help you work with your Excel data. What would you like to do?",
      timestamp: new Date(),
    },
    {
      id: "3",
      type: "assistant",
      content: "Hello! I can help you work with your Excel data. What would you like to do?",
      timestamp: new Date(),
    },
    {
      id: "4",
      type: "user",
      content: "Hello! I can help you work with your Excel data. What would you like to do?",
      timestamp: new Date(),
    },
    {
      id: "5",
      type: "assistant",
      content: "Hello! I can help you work with your Excel data. What would you like to do?",
      timestamp: new Date(),
    },
    {
      id: "6",
      type: "user",
      content: "Hello! I can help you work with your Excel data. What would you like to do?",
      timestamp: new Date(),
    },
    {
      id: "7",
      type: "assistant",
      content: "Hello! I can help you work with your Excel data. What would you like to do?",
      timestamp: new Date(),
    },
  ])

  const fileInputRef = useRef<HTMLInputElement>(null)

  const [message, setMessage] = useState("")

  const handleSendMessage = () => {
    if (!message.trim()) return

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "user",
      content: message,
      timestamp: new Date(),
    }

    setChatMessages((prev) => [...prev, newMessage])
    setMessage("")

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: "I understand you want to work with the selected cells. Let me help you with that.",
        timestamp: new Date(),
      }
      setChatMessages((prev) => [...prev, aiResponse])
    }, 1000)
  }

const connectors = [
  { id: "stripe", name: "Stripe", icon: CreditCard },
  { id: "shopify", name: "Shopify", icon: ShoppingCart },
  { id: "woocommerce", name: "WooCommerce", icon: Package },
  { id: "database", name: "Database", icon: Database },
]

  return (
    <div className="flex flex-col h-full place-items-center">
      <ScrollArea className="flex-1 p-3">
        <div className="space-y-4">
          {chatMessages.map((msg) => (
            <div key={msg.id} className="space-y-2">
              <div
                className={`flex items-center gap-2 ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.type === "assistant" && (
                  <>
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                        <Bot className="h-3 w-3" />
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs font-medium text-muted-foreground">Assistant</span>
                  </>
                )}
                {msg.type === "user" && (
                  <>
                    <span className="text-xs font-medium text-muted-foreground">You</span>
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="bg-accent text-accent-foreground text-xs">
                        <User className="h-3 w-3" />
                      </AvatarFallback>
                    </Avatar>
                  </>
                )}
              </div>

              <div className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${msg.type === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                    }`}
                >
                  {msg.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      {/* Input Area */}
      <div className="p-3 border-t border-border max-w-[90%] bg-muted">
        <div className="flex gap-2 mb-2">
          {/* Context Button */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 bg-transparent">
                <Settings className="h-3 w-3 mr-1" />
                Context
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-0" align="start">
              <div className="p-3">
                <div className="text-sm font-medium mb-3">Connectors</div>
                <div className="space-y-2">
                  {connectors.map((connector) => (
                    <div
                      key={connector.id}
                      className="flex items-center gap-3 p-2 rounded-md hover:bg-muted cursor-pointer"
                    >
                      <connector.icon className="h-4 w-4 text-muted-foreground" />
                      <div className="flex-1">
                        <div className="text-sm font-medium">{connector.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>

          {/* Upload Button */}
          <Button variant="outline" size="sm" onClick={() => fileInputRef.current?.click()} className="h-8">
            <Upload className="h-3 w-3 mr-1" />
            Upload
          </Button>
          <input ref={fileInputRef} type="file" multiple className="hidden"  />
          {/* onChange={handleFileUpload} */}
        </div>

        {/* Message Input */}
        <div className="flex gap-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask me anything about your Excel data..."
            className="flex-1 text-sm"
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <Button onClick={handleSendMessage} size="sm" className="h-9 w-9 p-0" disabled={!message.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
