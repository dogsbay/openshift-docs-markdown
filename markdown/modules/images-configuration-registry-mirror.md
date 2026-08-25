{% if context == "enabling-windows-container-workloads" %}
{%- set winc = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding image registry repository mirroring {id="images-configuration-registry-mirror_{{ context }}"}

You must mirror images to update clusters in disconnected environments.  {._abstract}

By setting up container registry repository mirroring, you can perform the following tasks:

*   Configure your {{ product_title }} cluster to redirect requests to pull images from a repository on a source image registry and have it resolved by a repository on a mirrored image registry.
*   Identify multiple mirrored repositories for each target repository, to make sure that if one mirror is down, another can be used.

Repository mirroring in {{ product_title }} includes the following attributes:

*   Image pulls are resilient to registry downtimes.
*   Clusters in disconnected environments can pull images from critical locations, such as `quay.io`, and have registries behind a company firewall provide the requested images.
*   A particular order of registries is tried when an image pull request is made, with the permanent registry typically being the last one tried.
{%- if not winc %}
*   The mirror information you enter is added to the `/etc/containers/registries.conf` file on every node in the {{ product_title }} cluster.
{% endif %}
{% if winc %}
*   The mirror information you enter is added to the appropriate `hosts.toml` containerd configuration file(s) on every Windows node in the {{ product_title }} cluster.
{%- endif %}
*   When a node makes a request for an image from the source repository, it tries each mirrored repository in turn until it finds the requested content. If all mirrors fail, the cluster tries the source repository. If successful, the image is pulled to the node.

You can set up repository mirroring in the following ways:

*   At {{ product_title }} installation:

    By pulling container images needed by {{ product_title }} and then bringing those images behind your company’s firewall, you can install {{ product_title }} into a data center that is in a disconnected environment.
*   After {{ product_title }} installation:

    If you did not configure mirroring during {{ product_title }} installation, you can do so postinstallation by using any of the following custom resource (CR) objects:
    *   `ImageDigestMirrorSet` (IDMS). This object allows you to pull images from a mirrored registry by using digest specifications. The IDMS CR enables you to set a fall back policy that allows or stops continued attempts to pull from the source registry if the image pull fails.
    *   `ImageTagMirrorSet` (ITMS). This object allows you to pull images from a mirrored registry by using image tags. The ITMS CR enables you to set a fall back policy that allows or stops continued attempts to pull from the source registry if the image pull fails.
        {%- if not winc %}
    *   `ImageContentSourcePolicy` (ICSP). This object allows you to pull images from a mirrored registry by using digest specifications. The ICSP CR always falls back to the source registry if the mirrors do not work.

        :::important

        Using an `ImageContentSourcePolicy` (ICSP) object to configure repository mirroring is a deprecated feature. Deprecated functionality is still included in {{ product_title }} and continues to be supported. It will be removed in a future release and is not recommended for new deployments.

        If you have existing YAML files that you used to create `ImageContentSourcePolicy` objects, you can use the `oc adm migrate icsp` command to convert those files to a `ImageDigestMirrorSet` YAML files. For more information, see "Converting ImageContentSourcePolicy (ICSP) files for image registry repository mirroring".
        
        :::

{% endif %}

Each of these custom resource objects identify the following information:

*   The source of the container image repository you want to mirror.
*   A separate entry for each mirror repository you want to offer the content

Note the following actions and how they affect node drain behavior:

*   If you create an IDMS or ICSP CR object, the MCO does not drain or reboot the node.
*   If you create an ITMS CR object, the MCO drains and reboots the node.
{%- if not winc %}
*   If you delete an ITMS, IDMS, or ICSP CR object, the MCO drains and reboots the node.
*   If you modify an ITMS, IDMS, or ICSP CR object, the MCO drains and reboots the node.

    :::important

{% include "./snippets/node-icsp-no-drain.md" %}

    
    :::

{% endif %}
{% if winc %}
*   If you delete an ITMS or IDMS CR object, the MCO drains and reboots the node.
*   If you modify an ITMS or IDMS CR object, the MCO drains and reboots the node.
{% endif %}

{% if not winc %}
For new clusters, you can use IDMS, ITMS, and ICSP CRs objects as needed. However, using IDMS and ITMS is recommended.

If you upgraded a cluster, any existing ICSP objects remain stable, and both IDMS and ICSP objects are supported. Workloads that use ICSP objects continue to function as expected. However, if you want to take advantage of the fallback policies introduced in the IDMS CRs, you can migrate current workloads to IDMS objects by using the `oc adm migrate icsp` command as shown in the **Converting ImageContentSourcePolicy (ICSP) files for image registry repository mirroring** section that follows. Migrating to IDMS objects does not require a cluster reboot.

{% include "./snippets/idms-global-pull-secret.md" %}

{% endif %}

{% if winc %}
The Windows Machine Config Operator (WMCO) watches for changes to the IDMS and ITMS resources and generates a set of `hosts.toml` containerd configuration files, one file for each source registry, with those changes. The WMCO then updates any existing Windows nodes to use the new registry configuration.


:::note

The IDMS and ITMS objects must be created before you can add Windows nodes using a mirrored registry.

:::

{% endif %}

{% if context == "enabling-windows-container-workloads" %}
{%- set winc = false -%}
{% endif %}