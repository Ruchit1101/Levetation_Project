import { createContext, useState, ReactNode } from "react";

interface UserContextType {
    email: string;
    setEmail: (name: string) => void;
    id: string;
    setId: (id: string) => void;
}

export const UserContext = createContext<UserContextType>({
    email: '',
    setEmail: () => {},
    id: '',
    setId: () => {},
  });
export function UserContextProvider({ children }: { children: ReactNode }) {
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");

    return (
        <UserContext.Provider value={{ email, setEmail, id, setId }}>
            {children}
        </UserContext.Provider>
    );
}
