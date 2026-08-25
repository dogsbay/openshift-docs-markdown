{%- set _mod_docs_content_type = "CONCEPT" %}
# How Kustomize works with manifests to deploy applications {id="microshift-manifests-overview_{{ context }}"}

The `kustomize` configuration management tool is integrated with {{ microshift_short }}. You can use Kustomize and the {{ oc_first }} together to apply customizations to your application manifests and deploy those applications to a {{ microshift_short }} node. {._abstract}

*   A `kustomization.yaml` file is a specification of resources plus customizations.
*   Kustomize uses a `kustomization.yaml` file to load a resource, such as an application, then applies any changes you want to that application manifest and produces a copy of the manifest with the changes overlaid.
*   Using a manifest copy with an overlay keeps the original configuration file for your application intact, while enabling you to deploy iterations and customizations of your applications efficiently.
*   You can then deploy the application in your {{ microshift_short }} node with an `oc` command.


:::note

At each system start, {{ microshift_short }} deletes the manifests found in the `delete` subdirectories and then applies the manifest files found in the manifest directories to the node.

:::


## How {{ microshift_short }} uses manifests {id="how-microshift-uses-manifests"}
At every start, {{ microshift_short }} searches the following manifest directories for Kustomize manifest files:

*   `/etc/microshift/manifests`
*   `/etc/microshift/manifests.d/++*++`
*   `/usr/lib/microshift/`
*   `/usr/lib/microshift/manifests.d/++*++`

{{ microshift_short }} automatically runs the equivalent of the `kubectl apply -k` command to apply the manifests to the node if any of the following file types exists in the searched directories:

*   `kustomization.yaml`
*   `kustomization.yml`
*   `Kustomization`

This automatic loading from multiple directories means you can manage {{ microshift_short }} workloads with the flexibility of having different workloads run independently of each other.

**{{ microshift_short }} manifest directories**

| Location | Intent |
| --- | --- |
| `/etc/microshift/manifests` | Read-write location for configuration management systems or development. |
| `/etc/microshift/manifests.d/*` | Read-write location for configuration management systems or development. |
| `/usr/lib/microshift/manifests` | Read-only location for embedding configuration manifests on OSTree-based systems. |
| `/usr/lib/microshift/manifestsd./*` | Read-only location for embedding configuration manifests on OSTree-based systems. |