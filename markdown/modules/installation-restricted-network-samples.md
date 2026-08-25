{% if context == "post-install-cluster-tasks" %}
{%- set restrictednetwork = true -%}
{% endif %}

{% if context == "samples-operator-alt-registry" %}
{%- set samplesoperatoraltreg = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using Cluster Samples Operator image streams with alternate or mirrored registries {id="installation-restricted-network-samples_{{ context }}"}

You can use an alternate or mirror registry to host your images streams instead of using the Red&#160;Hat registry. {._abstract}

Most image streams in the `openshift` namespace managed by the Cluster Samples Operator point to images located in the Red&#160;Hat registry at [registry.redhat.io](https://registry.redhat.io).
{%- if restrictednetwork %}
Mirroring does not apply to these image streams.
{%- endif %}


:::note

The `cli`, `installer`, `must-gather`, and `tests` image streams, while part of the install payload, are not managed by the Cluster Samples Operator. These are not addressed in this procedure.

:::



:::important

The Cluster Samples Operator must be set to `Managed` in a disconnected environment. To install the image streams, you must have a mirrored registry.

:::


**Prerequisites**

{%- if not (openshift_rosa or openshift_dedicated) %}
*   Access to the cluster as a user with the `cluster-admin` role.
{%- endif %}
{%- if openshift_rosa or openshift_dedicated %}
*   Access to the cluster as a user with the `dedicated-admin` role.
{%- endif %}
*   Create a pull secret for your mirror registry.

**Procedure**

1.  Access the images of a specific image stream to mirror, for example:
    ```terminal
    $ oc get is <imagestream> -n openshift -o json | jq .spec.tags[].from.name | grep registry.redhat.io
    ```
1.  Mirror images from [registry.redhat.io](https://registry.redhat.io) associated with any image streams you need
    {%- if restrictednetwork %}
    in the restricted network environment into one of the defined mirrors, for example:
    {%- endif %}
    {%- if configsamplesoperator %}
    into your defined preferred registry, for example:
    {%- endif %}
    ```terminal
    $ oc image mirror registry.redhat.io/rhscl/ruby-25-rhel7:latest ${MIRROR_ADDR}/rhscl/ruby-25-rhel7:latest
    ```
1.  Create the image configuration object for the cluster by running the following command:
    ```terminal
    $ oc create configmap registry-config --from-file=${MIRROR_ADDR_HOSTNAME}..5000=$path/ca.crt -n openshift-config
    ```
1.  Add the required trusted CAs for the mirror in the image configuration object:
    ```terminal
    $ oc patch image.config.openshift.io/cluster --patch '{"spec":{"additionalTrustedCA":{"name":"registry-config"}}}' --type=merge
    ```
1.  Update the `samplesRegistry` field in the Cluster Samples Operator configuration object to contain the `hostname` portion of the mirror location defined in the mirror configuration:
    ```terminal
    $ oc edit configs.samples.operator.openshift.io -n openshift-cluster-samples-operator
    ```

    :::important

    This step is required because the image stream import process does not use the mirror or search mechanism at this time.
    
    :::

1.  Add any image streams that are not mirrored into the `skippedImagestreams` field of the Cluster Samples Operator configuration object. Or if you do not want to support any of the sample image streams, set the Cluster Samples Operator to `Removed` in the Cluster Samples Operator configuration object.

    :::note

    The Cluster Samples Operator issues alerts if image stream imports are failing but the Cluster Samples Operator is either periodically retrying or does not appear to be retrying them.
    
    :::


    Many of the templates in the `openshift` namespace reference the image streams. You can use `Removed` to purge both the image streams and templates. This eliminates the possibility of attempts to use the templates if they are not functional because of any missing image streams.

{% if context == "post-install-cluster-tasks" %}
{%- set restrictednetwork = "" -%}
{% endif %}

{% if context == "samples-operator-alt-registry" %}
{%- set samplesoperatoraltreg = "" -%}
{% endif %}