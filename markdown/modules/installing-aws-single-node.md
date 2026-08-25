{%- set _mod_docs_content_type = "CONCEPT" %}
# Installing a cluster on a single node {id="choosing-an-method-to-install-ocp-on-aws-single-node"}
{%- set context = "installing-single-node-aws" %}

Installing {{ product_title }} on a single node alleviates some of the requirements for high availability and large scale clusters. However, you must address requirements for installing on a single node, and the additional requirements for installing {{ sno }} on a cloud provider. {._abstract}

After addressing the requirements for single node installation, use the installing a customized cluster on AWS procedure to install the cluster. The installing single-node OpenShift manually section contains an exemplary `install-config.yaml` file when installing an {{ product_title }} cluster on a single node.