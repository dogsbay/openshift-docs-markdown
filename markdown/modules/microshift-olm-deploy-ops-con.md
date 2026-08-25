{%- set _mod_docs_content_type = "CONCEPT" %}
# How to deploy Operators using OLM {id="microshift-olm-deploy-operators_{{ context }}"}

After you create and deploy your custom catalog, you must create a Subscription custom resource (CR) that can access the catalog and install the Operators you choose. Where Operators run depends on the namespace in which you create the Subscription CR. {._abstract}


:::important

Operators that you are managing with Operator Lifecycle Manager (OLM) have a watch scope. For example, some Operators only support watching their own namespace, while others support watching every namespace in the node. All Operators installed in a given namespace must have the same watch scope.

:::


## Connectivity and OLM Operator deployment {id="microshift-olm-operators-connection-details_{{ context }}"}

You can deplpy Operators anywhere a catalog is running.

*   For a node that is connected to the internet, mirroring images is not required. Images can be pulled over the network.
*   For restricted networks in which {{ microshift_short }} has access to an internal network only, images must be mirrored to an internal registry.
*   For use cases in which a {{ microshift_short }} node is completely offline, all images must be embedded into an `osbuild` blueprint or a Containerfile.