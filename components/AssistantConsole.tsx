
import React, { useState, useRef, useEffect } from 'react';
import { gemini } from '../services/geminiService';

const AssistantConsole: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<{role: 'user' | 'system', text: string}[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;
        
        const userMsg = input;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setIsLoading(true);

        const response = await gemini.askSystem(userMsg);
        setMessages(prev => [...prev, { role: 'system', text: response }]);
        setIsLoading(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {isOpen && (
                <div className="w-[320px] h-[400px] bg-black text-green-500 border border-green-900/50 rounded-lg shadow-2xl flex flex-col overflow-hidden mb-4 mono text-[11px] p-4">
                    <div className="flex justify-between items-center border-b border-green-900/30 pb-2 mb-4">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            SYSTEM_TERMINAL v2.1
                        </span>
                        <button onClick={() => setIsOpen(false)} className="hover:text-white">[X]</button>
                    </div>

                    <div ref={scrollRef} className="flex-1 overflow-y-auto no-scrollbar space-y-4 mb-4">
                        <div className="opacity-50 italic">Welcome, Administrator. Epistemological engine ready.</div>
                        {messages.map((m, i) => (
                            <div key={i} className={m.role === 'user' ? 'text-white' : 'text-green-500'}>
                                <span className="opacity-50 mr-2">{m.role === 'user' ? '>' : '#'}</span>
                                {m.text}
                            </div>
                        ))}
                        {isLoading && <div className="animate-pulse opacity-50">Processing request...</div>}
                    </div>

                    <div className="flex gap-2">
                        <span className="opacity-50">{'>'}</span>
                        <input 
                            type="text" 
                            className="flex-1 bg-transparent border-none outline-none text-green-500 placeholder-green-900"
                            placeholder="QUERY SYSTEM..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        />
                    </div>
                </div>
            )}
            
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="bg-black text-white p-4 rounded-full shadow-lg border border-white/20 hover:scale-105 transition-transform flex items-center gap-2"
            >
                <span className="material-symbols-outlined">terminal</span>
                <span className="text-[10px] mono uppercase font-bold tracking-widest">Sys_Admin</span>
            </button>
        </div>
    );
};

export default AssistantConsole;
