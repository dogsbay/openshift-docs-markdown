{%- set _mod_docs_content_type = "SNIPPET" %}

You should only modify the {{ op_system }} image for compute machines to use {{ platform_abbreviation }} Marketplace image. Control plane machines and infrastructure nodes do not require an {{ product_title }} subscription and use the public RHCOS default image by default, which does not incur subscription costs on your {{ platform_abbreviation_short }} bill. Therefore, you should not modify the cluster default boot image or the control plane boot images. Applying the {{ platform_abbreviation_short }} Marketplace image to them will incur additional licensing costs that cannot be recovered.

{%- set platform_abbreviation = false -%}
{%- set platform_abbreviation_short = false -%}