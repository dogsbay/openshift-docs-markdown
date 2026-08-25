{%- set _mod_docs_content_type = "CONCEPT" %}
# Deploy {{ microshift_short }} behind an HTTP or HTTPS proxy {id="microshift-http-proxy_{{ context }}"}

To add basic anonymity and security measures to your pods, you can deploy {{ microshift_short }} behind an HTTP or HTTPS proxy. {._abstract}

You must configure the host operating system to use the proxy service with all components initiating HTTP or HTTPS requests when deploying {{ microshift_short }} behind a proxy.

All the user-specific workloads or pods with egress traffic, such as accessing cloud services, must be configured to use the proxy. There is no built-in transparent proxying of egress traffic in {{ microshift_short }}.