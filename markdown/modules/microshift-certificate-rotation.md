{%- set _mod_docs_content_type = "CONCEPT" %}
# Certificate rotation {id="microshift-certificate-rotation_{{ context }}"}

Certificates that are expired or close to their expiration dates must be rotated to ensure continued {{ microshift_short }} operation. Certificate rotation can occur automatically. {._abstract}

When {{ microshift_short }} restarts for any reason, certificates that are close to expiring are rotated. A certificate that expires soon, or has already expired, can also cause an automatic {{ microshift_short }} restart to perform a rotation.


:::important

If the rotated certificate is a {{ microshift_short }} certificate authority (CA), all signed certificates are also rotated. If you created custom CAs, you must rotate them manually.

:::