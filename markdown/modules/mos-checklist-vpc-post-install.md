{%- set _mod_docs_content_type = "CONCEPT" %}
# Create VPC before cluster deployment {id="mos-checklist-vpc-post-install_{{ context }}"}

{{ product_title }} clusters must be deployed into an existing AWS Virtual Private Cloud (VPC). {._abstract}

{% include "./snippets/snip_install-cluster-in-vpc.md" %}

{% leveloffset +0 %}{% include "./snippets/snip_rosa-existing-vpc-requirements.md" %}{% endleveloffset %}