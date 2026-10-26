{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure additional routes to the `cdi-uploadproxy` service {id="virt-configuring-cdiuploadproxy-routes_{{ context }}"}

Configure additional routes to the `cdi-uploadproxy` service to enable users to upload virtual machine images from outside the cluster. {._abstract}

**Prerequisites**

*   You installed the {{ oc_first }}.
*   You logged in to the cluster as a user with the `cluster-admin` role.

**Procedure**

1.  Configure the route to the external host by running the following command:
    ```terminal
    $ oc create route reencrypt <route_name> -n openshift-cnv \
        --insecure-policy=Redirect \
        --hostname=<host_name_or_address> \
        --service=cdi-uploadproxy
    ```

    where:

    `<route_name>`
    :   Specifies the name to assign to this custom route.

    `<host_name_or_address>`
    :   Specifies the fully qualified domain name or IP address of the external host providing image upload access.

1.  Run the following command to annotate the route. This ensures that the correct Containerized Data Importer (CDI) CA certificate is injected when certificates are rotated:
    ```terminal
    $ oc annotate route <route_name> -n openshift-cnv \
        operator.cdi.kubevirt.io/injectUploadProxyCert="true"
    ```

    where:

    `<route_name>`
    :   Specifies the name of the route you created.