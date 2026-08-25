{%- set _mod_docs_content_type = "CONCEPT" %}
# Mirror registry for Red Hat OpenShift introduction {id="mirror-registry-introduction_{{ context }}"}

For disconnected deployments of {{ product_title }}, a container registry is required to carry out the installation of the clusters. To run a production-grade registry service on such a cluster, you must create a separate registry deployment to install the first cluster. The _mirror registry for Red&#160;Hat OpenShift_ addresses this need and is included in every {{ product_title }} subscription. It is available for download on the "OpenShift console Downloads" page. {._abstract}

The _mirror registry for Red&#160;Hat OpenShift_ allows users to install a small-scale version of {{ quay }} and its required components by using the `mirror-registry` command-line interface (CLI) tool. The _mirror registry for Red&#160;Hat OpenShift_ is deployed automatically with pre-configured local storage and a local database. It also includes auto-generated user credentials and access permissions with a single set of inputs and no additional configuration choices to get started.

The _mirror registry for Red&#160;Hat OpenShift_ provides a pre-determined network configuration and reports deployed component credentials and access URLs upon success. A limited set of optional configuration inputs such as fully qualified domain name (FQDN) services, superuser name and password, and custom TLS certificates are also provided. This provides users with a container registry so that they can easily create an offline mirror of all {{ product_title }} release content when running {{ product_title }} in restricted network environments.

Use of the _mirror registry for Red&#160;Hat OpenShift_ is optional if another container registry is already available in the install environment.

## Mirror registry for Red Hat OpenShift limitations {id="mirror-registry-limitations_{{ context }}"}

The following limitations apply to the _mirror registry for Red&#160;Hat OpenShift_:

*   The _mirror registry for Red&#160;Hat OpenShift_ is not a highly-available registry and only local file system storage is supported. It is not intended to replace {{ quay }} or the internal image registry for {{ product_title }}.
*   The _mirror registry for Red&#160;Hat OpenShift_ is not intended to be a substitute for a production deployment of {{ quay }}.
*   The _mirror registry for Red&#160;Hat OpenShift_ is only supported for hosting images that are required to install a disconnected {{ product_title }} cluster, such as Release images or Red&#160;Hat Operator images. It uses local storage on your {{ op_system_base_full }} machine, and storage supported by {{ op_system_base }} is supported by the _mirror registry for Red&#160;Hat OpenShift_.

    :::note

    Because the _mirror registry for Red&#160;Hat OpenShift_ uses local storage, you should remain aware of the storage usage consumed when mirroring images and use {{ quay }}'s garbage collection feature to mitigate potential issues. For more information about this feature, see "{{ quay }} garbage collection".
    
    :::

*   Support for Red&#160;Hat product images that are pushed to the _mirror registry for Red&#160;Hat OpenShift_ for bootstrapping purposes are covered by valid subscriptions for each respective product. For a list of exceptions to further enable the bootstrap experience, see "Self-managed Red&#160;Hat OpenShift sizing and subscription guide".
*   Content built by customers should not be hosted by the _mirror registry for Red&#160;Hat OpenShift_.
*   Using the _mirror registry for Red&#160;Hat OpenShift_ with more than one cluster is discouraged because multiple clusters can create a single point of failure when updating your cluster fleet. Instead, use the _mirror registry for Red&#160;Hat OpenShift_ to install a cluster that can host a production-grade, highly-available registry such as {{ quay }}, which can serve {{ product_title }} content to other clusters.