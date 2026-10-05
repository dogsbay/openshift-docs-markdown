{%- set _mod_docs_content_type = "PROCEDURE" %}
# Use X-Forwarded headers {id="nw-using-ingress-forwarded_{{ context }}"}

To control how the HAProxy Ingress Controller handles `Forwarded` and `X-Forwarded-For` headers in {{ product_title }}, you can set the `HTTPHeaders` policy on an Ingress Controller. The Ingress Operator configures the `ROUTER_SET_FORWARDED_HEADERS` environment variable from that field. {._abstract}

**Procedure**

1.  Configure the `HTTPHeaders` field for the Ingress Controller.
    1.  Use the following command to edit the `IngressController` resource:
        ```terminal
        $ oc edit IngressController
        ```
    1.  Under `spec`, set the `HTTPHeaders` policy field to `Append`, `Replace`, `IfNone`, or `Never`:
        ```yaml
        apiVersion: operator.openshift.io/v1
        kind: IngressController
        metadata:
          name: default
          namespace: openshift-ingress-operator
        spec:
          httpHeaders:
            forwardedHeaderPolicy: Append
        ```