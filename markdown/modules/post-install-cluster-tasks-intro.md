{%- set _mod_docs_content_type = "CONCEPT" %}
# Postinstallation cluster tasks {id="post-install-cluster-tasks-intro_{{ context }}"}

After installing {{ product_title }}, you can configure, scale, and maintain your cluster to meet operational requirements, including managing nodes and infrastructure workloads, enabling features, applying autoscaling, and maintaining etcd. {._abstract}

After installing {{ product_title }}, you can further expand and customize your cluster to your requirements.

## Available cluster customizations {id="_available_cluster_customizations"}

You complete most of the cluster configuration and customization after you deploy your {{ product_title }} cluster. Several _configuration resources_ are available.


:::note

If you install your cluster on {{ ibm_z_name }}, not all features and functions are available.

:::


You modify the configuration resources to configure the major features of the cluster, such as the image registry, networking configuration, image build behavior, and the identity provider.

For current documentation of the settings that you control by using these resources, use the `oc explain` command, for example `oc explain builds --api-version=config.openshift.io/v1`