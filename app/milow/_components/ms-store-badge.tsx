"use client";

import Script from "next/script";

export function MsStoreBadge() {
    return (
        <>
            <Script
                type="module"
                src="https://get.microsoft.com/badge/ms-store-badge.bundled.js"
                strategy="lazyOnload"
            />
            {/* @ts-expect-error - ms-store-badge is a custom web component */}
            <ms-store-badge
                productid="9P641Q1X1BMG"
                productname="milow terminal"
                window-mode="direct"
                theme="auto"
                size="large"
                style={{ height: '40px', width: 'auto', display: 'inline-block' }}
                language="en-ca"
                animation="off"
            />
        </>
    );
}

