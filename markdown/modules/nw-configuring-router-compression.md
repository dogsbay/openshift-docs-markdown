{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using router compression {id="nw-configuring-router-compression_{{ context }}"}

You configure the HAProxy Ingress Controller to specify router compression globally for specific MIME types. You can use the `mimeTypes` variable to define the formats of MIME types to which compression is applied. The types are: application, image, message, multipart, text, video, or a custom type prefaced by "X-". To see the full notation for MIME types and subtypes, see [RFC1341](https://datatracker.ietf.org/doc/html/rfc1341#page-7).


:::note

Memory allocated for compression can affect the max connections. Additionally, compression of large buffers can cause latency, like heavy regex or long lists of regex.

Not all MIME types benefit from compression, but HAProxy still uses resources to try to compress if instructed to.  Generally, text formats, such as html, css, and js, formats benefit from compression, but formats that are already compressed, such as image, audio, and video, benefit little in exchange for the time and resources spent on compression.

:::


**Procedure**

1.  Configure the `httpCompression` field for the Ingress Controller.
    1.  Use the following command to edit the `IngressController` resource:
        ```terminal
        $ oc edit -n openshift-ingress-operator ingresscontrollers/default
        ```
    1.  Under `spec`, set the `httpCompression` policy field to `mimeTypes` and specify a list of MIME types that should have compression applied:
        ```yaml
        apiVersion: operator.openshift.io/v1
        kind: IngressController
        metadata:
          name: default
          namespace: openshift-ingress-operator
        spec:
          httpCompression:
            mimeTypes:
            - "text/html"
            - "text/css; charset=utf-8"
            - "application/json"
           ...
        ```