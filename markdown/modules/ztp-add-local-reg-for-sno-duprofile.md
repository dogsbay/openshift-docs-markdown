{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuring the Image Registry Operator for local caching of images {id="ztp-add-local-reg-for-sno-duprofile_{{ context }}"}

{{ product_title }} manages image caching using a local registry. In edge computing use cases, clusters are often subject to bandwidth restrictions when communicating with centralized image registries, which might result in long image download times. {._abstract}

Long download times are unavoidable during initial deployment. Over time, there is a risk that CRI-O will erase the `/var/lib/containers/storage` directory in the case of an unexpected shutdown.
To address long image download times, you can create a local image registry on remote managed clusters using {{ ztp_first }}. This is useful in Edge computing scenarios where clusters are deployed at the far edge of the network.

Before you can set up the local image registry with {{ ztp }}, you need to configure disk partitioning in the `ClusterInstance` CR that you use to install the remote managed cluster. After installation, you configure the local image registry using a `{{ policy_gen_cr }}`{minja} CR. Then, the {{ ztp }} pipeline creates Persistent Volume (PV) and Persistent Volume Claim (PVC) CRs and patches the `imageregistry` configuration.


:::note

The local image registry can only be used for user application images and cannot be used for the {{ product_title }} or Operator Lifecycle Manager operator images.

:::