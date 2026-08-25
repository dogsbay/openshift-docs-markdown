{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating nodes in the {{ oda }} environment {id="abi-oda-create-nodes_{{ context }}"}

After generating and downloading the Discovery ISO to your {{ oda_first }} environment, create control plane nodes and worker nodes in the environment. {._abstract}

**Procedure**

1.  Run the script to create control plane nodes as described in section 3.4 of the [Red&#160;Hat {{ product_title }} on {{ oda }} Deployment Guide](https://www.oracle.com/a/otn/docs/red-hat-openshift-container-platform-4-19.pdf) (Oracle documentation).
1.  Run the script to create worker nodes as described in section 3.5 of the "Red&#160;Hat {{ product_title }} on {{ oda }} Deployment Guide".
1.  Update the MAC address for each node as described in section 3.6 of the "Red&#160;Hat {{ product_title }} on {{ oda }} Deployment Guide".