{%- set _mod_docs_content_type = "CONCEPT" %}
# Long-term-certificate rotation {id="microshift-long-term-certificate-rotation_{{ context }}"}

Long-term certificates that are expired or close to their expiration dates must be rotated to ensure continued {{ microshift_short }} operation. {._abstract}

The following situations describe {{ microshift_short }} actions during long-term certificate lifetime:


No rotation
:   When a long-term certificate is up to 8.5 years old, no rotation occurs.


Rotation at restart
:   When a long-term certificate is 8.5 to 9 years old, it is rotated when {{ microshift_short }} starts or restarts.


Automatic restart for rotation
:   When a long-term certificate is more than 9 years old, {{ microshift_short }} might automatically restart so that it can rotate and apply a new certificate.