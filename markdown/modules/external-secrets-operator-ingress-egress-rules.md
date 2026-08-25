{%- set _mod_docs_content_type = "REFERENCE" %}
# Default ingress and egress rules {id="external-secrets-operator-ingress-egress-rules_{{ context }}"}

The ingress and egress rules are necessary to build a secure setup where every component acts with the least amount of privilege necessary. These rules protect your cluster by strictly blocking unnecessary traffic and only allowing the outbound connections needed to fetch secrets. They also permit the specific inbound connections required to validate webhooks and observe system performance. {._abstract}

The following table summarizes the specific ports and protocols used by each component.

| Component | Ingress ports | Egress ports | Description |
| --- | --- | --- | --- |
| `external-secrets` | 8080 | 6443 | Allows retrieving metrics and interacting with the API server |
| `external-secrets-webhook` | 8080/10250 | 6443 | Allows retrieving metrics, handling webhook requests, and interacting with the API server |
| `external-secrets-cert-controller` | 8080 | 6443 | Allows retrieving metrics and interacting with the API server |
| `external-secrets-bitwarden-server` | 9998 | 6443 | Handles Bitwarden server connections and interacts with the API server |
| `external-secrets-allow-dns` |  | 5353 | Enables DNS lookups to find external secret providers. |