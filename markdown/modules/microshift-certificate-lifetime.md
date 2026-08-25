{%- set _mod_docs_content_type = "CONCEPT" %}
# Security certificate lifetime {id="microshift-certificate-lifetime_{{ context }}"}

{{ microshift_short }} certificates are digital certificates that secure communication with communication protocols such as HTTPS. They fall into two basic categories: {._abstract}


Short-lived certificates
:   Valid for one year. Most server or leaf certificates are short-lived.

Long-lived certificates
:   Valid for 10 years. For example, the client certificate for `system:admin` user authentication, or the `kube-apiserver` external serving certificate signer.

{{ microshift_short }} restarts automatically depending on certificate age.