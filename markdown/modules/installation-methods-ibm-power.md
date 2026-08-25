{%- set _mod_docs_content_type = "REFERENCE" %}
# Installing a cluster on user-provisioned infrastructure {id="installation-methods-ibm-power_{{ context }}"}

Choose an installation method for {{ ibm_power_name }} based on your network connectivity requirements. {._abstract}

*   **Installing a cluster on {{ ibm_power_name }}**: You can install {{ product_title }} on {{ ibm_power_name }} infrastructure that you provision.
*   **Installing a cluster on {{ ibm_power_name }} in a restricted network**: You can install {{ product_title }} on {{ ibm_power_name }} infrastructure that you provision in a restricted or disconnected network by using an internal mirror of the installation release content. You can use this method to install a cluster that does not have an active internet connection to obtain the software components. You can also use this installation method to ensure that your clusters only use container images that satisfy your organizational controls on external content.