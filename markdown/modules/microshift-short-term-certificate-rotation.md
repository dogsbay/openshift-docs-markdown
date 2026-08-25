{%- set _mod_docs_content_type = "CONCEPT" %}
# Short-term-certificate rotation {id="microshift-short-term-certificate-rotation_{{ context }}"}

Short-term certificates that are expired or close to their expiration dates must be rotated to ensure continued {{ microshift_short }} operation. {._abstract}

The following situations describe {{ microshift_short }} actions during short-term-certificate lifetime:


No rotation
:   When a short-term certificate is up to 5 months old, no rotation occurs.


Rotation at restart
:   When a short-term certificate is 5 to 8 months old, it is rotated when {{ microshift_short }} starts or restarts.


Automatic restart for rotation
:   When a short-term certificate is more than 8 months old, {{ microshift_short }} can automatically restart to rotate and apply a new certificate.