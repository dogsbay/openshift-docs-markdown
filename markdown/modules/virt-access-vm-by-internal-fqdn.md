{%- set _mod_docs_content_type = "CONCEPT" %}
# VM access by stable internal FQDN {id="virt-access-vm-by-internal-fqdn_{{ context }}"}

You can access a virtual machine on a stable, fully qualified domain name (FQDN) by using headless services. A headless service creates DNS records for each pod instead of a virtual IP, enabling FQDN access without exposing specific ports. {._abstract}


:::important

If you created a VM by using the {{ product_title }} web console, you can find its internal FQDN listed in the **Network** tile on the **Overview** tab of the **VirtualMachine details** page.

:::