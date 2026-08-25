---
title: Manage secure signatures with sigstore
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Manage secure signatures with sigstore {id="nodes-sigstore-using"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "nodes-sigstore-using" %}

To improve supply chain security, cluster administrators or application developers can use the sigstore framework with {{ product_title }}.

Sigstore is a collection of open source tools that you can use individually or together to improve your software supply chain security by securely signing and verifying software artifacts.

{% leveloffset +1 %}{% include "./modules/nodes-sigstore-using-about.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-sigstore-configure.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-sigstore-configure-cluster-policy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/nodes-sigstore-configure-image-policy.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}"}
*   [Sigstore](https://www.sigstore.dev/)
*   [Fulcio certificate (Sigstore documentation)](https://docs.sigstore.dev/certificate_authority/overview/)
*   [Rekor verification in the Sigstore documentation](https://docs.sigstore.dev/logging/overview/)
*   [Cosign public and private key pair (Sigstore documentation)](https://docs.sigstore.dev/cosign/signing/overview/)
*   [About cluster and image policy parameters](/nodes/nodes-sigstore-using#nodes-sigstore-configure-parameters_nodes-sigstore-using)