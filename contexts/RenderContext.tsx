"use client"
import { createContext, useContext, useState } from "react";

const RenderContext = createContext<any>(null);

export const RenderProvider = ({ children }: { children: React.ReactNode }) => {
	const [shouldRender, setShouldRender] = useState(false);

	const triggerRender = () => setShouldRender(!shouldRender);

	return (
		<RenderContext.Provider value={{ shouldRender, triggerRender }}>
			{children}
		</RenderContext.Provider>
	);
};

export const useRenderContext = () => useContext(RenderContext);
