---
title: Configuring a custom PKI
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Configuring a custom PKI {id="configuring-a-custom-pki"}
{%- set context = "configuring-a-custom-pki" %}

To ensure secure communication between internal components in your {{ product_title }} cluster, you can add your organization’s custom Certificate Authority (CA) certificates to the cluster-wide truststore. {._abstract}

You can add your custom CA certificates to the cluster-wide truststore in one of two ways:

*   During cluster installation, by adding your CA certificate to the `install-config.yaml` file.
*   On a running cluster, by creating a `ConfigMap` object that contains your CA certificate and referencing it in the cluster `Proxy` object.


:::important

The cluster Proxy object is the mechanism for managing the cluster-wide truststore. This guide focuses only on the task of adding a CA. If you also need to configure an egress proxy, refer to the "Configuring the cluster-wide proxy" chapter for detailed instructions.

:::


{% leveloffset +1 %}{% include "./modules/adding-a-custom-CA-during-cluster-installation.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/adding-a-custom-CA-to-a-running-cluster.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/verifying-the-custom-ca-configuration.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/certificate-injection-using-operators.md" %}{% endleveloffset %}