{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using the Bare Metal Operator to manage resources across all namespaces {id="bmaas-using-the-bmo-to-manage-resources-across-all-namespaces_{{ context }}"}

For the Bare Metal Operator (BMO) to manage `BareMetalHost` resources across all namespaces in your {{ product_title }} cluster, you must configure the Operator to watch all namespaces. This configuration is important to avoid mixing non-{{ product_title }} workloads with other components in the same namespace. {._abstract}

**Prerequisites**

*   If you are using user-provisioned installation and the Provisioning CR does not exist, you must create it manually. For instructions, see [Configuring a provisioning resource to scale user-provisioned clusters](https://docs.redhat.com/en/documentation/openshift_container_platform/{{ product_version }}/html-single/installing_on_bare_metal/index#scaling-a-user-provisioned-cluster-with-the-bare-metal-operator). For installer-provisioned installations, the installation program creates the Provisioning custom resource (CR) automatically.

**Procedure**

*   Patch the provisioning configuration to enable watching all namespaces by running the following command:
    ```terminal
    $ oc patch provisioning/provisioning-configuration \
      --type merge -p '{"spec": {"watchAllNamespaces": true}}'
    ```

    The BMO applies this change automatically.