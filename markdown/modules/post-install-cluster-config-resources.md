{%- set _mod_docs_content_type = "REFERENCE" %}
# Cluster configuration resources {id="configuration-resources_{{ context }}"}

Review the globally scoped cluster configuration resources that control major features of an {{ product_title }} cluster. {._abstract}

All cluster configuration resources are globally scoped (not namespaced) and named `cluster`.

<table>
<thead>
<tr>
  <th>Resource name</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>apiserver.config.openshift.io</code></td>
  <td>Provides API server configuration such as <a href="/security/certificates/api-server#api-server-certificates">certificates and certificate authorities</a>.</td>
</tr>
<tr>
  <td><code>authentication.config.openshift.io</code></td>
  <td>Controls the <a href="/authentication/understanding-identity-provider#understanding-identity-provider">identity provider</a> and authentication configuration for the cluster.</td>
</tr>
<tr>
  <td><code>build.config.openshift.io</code></td>
  <td>Controls default and enforced <a href="/cicd/builds/build-configuration#build-configuration">configuration</a> for all builds on the cluster.</td>
</tr>
<tr>
  <td><code>console.config.openshift.io</code></td>
  <td>Configures the behavior of the web console interface, including the <a href="/web_console/configuring-web-console#configuring-web-console">logout behavior</a>.</td>
</tr>
<tr>
  <td><code>featuregate.config.openshift.io</code></td>
  <td>Enables <a href="/nodes/clusters/nodes-cluster-enabling-features#nodes-cluster-enabling-features">FeatureGates</a>so that you can use Tech Preview features.</td>
</tr>
<tr>
  <td><code>image.config.openshift.io</code></td>
  <td>Configures how specific <a href="/openshift_images/image-configuration#image-configuration">image registries</a> should be treated (allowed, disallowed, insecure, CA details).</td>
</tr>
<tr>
  <td><code>ingress.config.openshift.io</code></td>
  <td>Configuration details related to <a href="/networking/networking_operators/ingress-operator#nw-installation-ingress-config-asset_ingress-operator">routing</a> such as the default domain for routes.</td>
</tr>
<tr>
  <td><code>oauth.config.openshift.io</code></td>
  <td>Configures identity providers and other behavior related to <a href="/authentication/configuring-internal-oauth#configuring-internal-oauth">internal OAuth server</a> flows.</td>
</tr>
<tr>
  <td><code>project.config.openshift.io</code></td>
  <td>Configures <a href="/applications/projects/configuring-project-creation#configuring-project-creation">how projects are created</a> including the project template.</td>
</tr>
<tr>
  <td><code>proxy.config.openshift.io</code></td>
  <td>Defines proxies to be used by components needing external network access. Note: not all components currently consume this value.</td>
</tr>
<tr>
  <td><code>scheduler.config.openshift.io</code></td>
  <td>Configures <a href="/nodes/scheduling/nodes-scheduler-profiles#nodes-scheduler-profiles">scheduler</a> behavior such as profiles and default node selectors.</td>
</tr>
</tbody>
</table>