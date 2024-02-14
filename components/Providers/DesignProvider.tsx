import React from 'react';
import { ChakraProvider, PortalProps } from '@chakra-ui/react';
import { getTheme } from 'core/src/styles/chakra/theme';

export interface IDesignProviderProps {
    children: React.ReactNode;
    appContainerRef?: PortalProps['containerRef'];
}
export const DesignProvider: React.FC<IDesignProviderProps> = ({ children, appContainerRef }) => {
    return (
        <ChakraProvider theme={getTheme()} toastOptions={{ portalProps: { containerRef: appContainerRef } }}>
            {children}
        </ChakraProvider>
    );
};
