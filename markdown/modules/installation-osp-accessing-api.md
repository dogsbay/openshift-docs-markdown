{%- set _mod_docs_content_type = "CONCEPT" %}
# Access to the environment {id="installation-osp-accessing-api_{{ context }}"}

At deployment, all {{ product_title }} machines are created in a {{ rh_openstack_first }}-tenant network. Therefore, they are not accessible directly in most {{ rh_openstack }} deployments. {._abstract}

You can configure {{ product_title }} API and application access by using floating IP addresses (FIPs) during installation. You can also complete an installation without configuring FIPs, but the installer will not configure a way to reach the API or applications externally.