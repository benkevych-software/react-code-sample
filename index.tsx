import React from 'react';
import { createRoot } from 'react-dom/client';
import { PreloadAnimation } from 'core/src/components/Animations/Preload/PreloadAnimation';

import 'core/src/i18n';

import { App } from './components/App/App';

const container = document.getElementById('root');

if (!container) {
    console.error("Can't find root element to render");
} else {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <React.Suspense fallback={<PreloadAnimation />}>
                <App />
            </React.Suspense>
        </React.StrictMode>
    );
}
