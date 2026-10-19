{%- set _mod_docs_content_type = "CONCEPT" %}
# Red Hat OpenShift Service on AWS clusters without a CNI plugin {id="rosa-clusters-without-cni-plugin_{{ context }}"}

You can create a {{ product_title }} cluster without a Container Network Interface (CNI) plugin so that you can install a third-party CNI plugin that meets your specific networking requirements. After cluster creation, you install your chosen CNI plugin to provide pod networking. {._abstract}


:::important

For customers who choose to use their own CNI, the responsibility of CNI plugin support belongs to the customer in coordination with their chosen CNI vendor.

:::


The default plugin for {{ product_title }} is the OVN-Kubernetes network plugin. This plugin is the only Red Hat supported CNI plugin for {{ product_title }}.

If you use your own CNI for {{ product_title }} clusters, you must obtain commercial support from the plugin vendor before creating your clusters. Red&#160;Hat cannot assist with CNI-related issues, such as pod-to-pod traffic, but continues to provide support for all non-CNI issues. To receive CNI-related support from Red&#160;Hat, install the cluster with the default OVN-Kubernetes network plugin.