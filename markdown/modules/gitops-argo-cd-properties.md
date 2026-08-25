{%- set _mod_docs_content_type = "REFERENCE" %}
# Argo CD custom resource properties {id="argo-cd-properties_{{ context }}"}

The Argo CD Custom Resource consists of the following properties: {._abstract}

<table>
<thead>
<tr>
  <th><strong>Name</strong></th>
  <th><strong>Description</strong></th>
  <th><strong>Default</strong></th>
  <th><strong>Properties</strong></th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>ApplicationInstanceLabelKey</code></td>
  <td>The <code>metadata.label</code> key name where Argo CD injects the app name as a tracking label.</td>
  <td><code>app.kubernetes.io/instance</code></td>
  <td><code>ApplicationSet</code></td>
</tr>
<tr>
  <td><code>ApplicationSet</code> controller configuration options.</td>
  <td><code><em><Object></em></code></td>
  <td><ul><li><em><Image></em> - The container image for the <code>ApplicationSet</code> controller. This overrides the <code>ARGOCD_APPLICATIONSET_IMAGE</code> environment variable.</li><li><em><Version></em> - The tag to use with the <code>ApplicationSet</code> container image.</li><li><em><Resources></em> - The container compute resources.</li><li><em><LogLevel></em> - The log level used by the Argo CD Application Controller component. Valid options are <code>debug</code>, <code>info</code>, <code>error</code>, and <code>warn</code>.</li><li><em><LogFormat></em> - The log format used by the Argo CD Application Controller component. Valid options are <code>text</code> or <code>json</code>.</li><li><em><PrallelismLimit></em> - The kubectl parallelism limit to set for the controller <code>(--kubectl-parallelism-limit flag)</code>.</li></ul></td>
  <td><code>ConfigManagementPlugins</code></td>
</tr>
<tr>
  <td>Add a configuration management plugin.</td>
  <td><code>__<empty>__</code></td>
  <td><code>Controller</code></td>
  <td>Argo CD Application Controller options.</td>
</tr>
<tr>
  <td><code>__<Object>__</code></td>
  <td><ul><li><em><Processors.Operation></em> - The number of operation processors.</li><li><em><Processors.Status></em> - The number of status processors.</li><li><em><Resources></em> - The container compute resources.</li><li><em><LogLevel></em> - The log level used by the Argo CD Application Controller component. Valid options are <code>debug</code>, <code>info</code>, <code>error</code>, and <code>warn</code>.</li><li><em><AppSync></em> - AppSync is used to control the sync frequency of Argo CD applications</li><li><em><Sharding.enabled></em> - Enable sharding on the Argo CD Application Controller component. This property is used to manage a large number of clusters to relieve memory pressure on the controller component.</li><li><em><Sharding.replicas></em> - The number of replicas that will be used to support sharding of the Argo CD Application Controller.</li><li><em><Env></em> - Environment to set for the application controller workloads.</li></ul></td>
  <td><code>DisableAdmin</code></td>
  <td>Disables the built-in admin user.</td>
</tr>
<tr>
  <td><code>false</code></td>
  <td><code>GATrackingID</code></td>
  <td>Use a Google Analytics tracking ID.</td>
  <td><code>__<empty>__</code></td>
</tr>
<tr>
  <td><code>GAAnonymizeusers</code></td>
  <td>Enable hashed usernames sent to google analytics.</td>
  <td><code>false</code></td>
  <td><code>HA</code></td>
</tr>
<tr>
  <td>High availablity options.</td>
  <td><code>__<Object>__</code></td>
  <td><ul><li><em><Enabled></em> - Toggle high availability support globally for Argo CD.</li><li><em><RedisProxyImage></em> - The Redis HAProxy container image. This overrides the <code>ARGOCD_REDIS_HA_PROXY_IMAGE</code> environment variable.</li><li><em><RedisProxyVersion></em> - The tag to use for the Redis HAProxy container image.</li></ul></td>
  <td><code>HelpChatURL</code></td>
</tr>
<tr>
  <td>URL for getting chat help (this will typically be your Slack channel for support).</td>
  <td><code>https://mycorp.slack.com/argo-cd</code></td>
  <td><code>HelpChatText</code></td>
  <td>The text that appears in a text box for getting chat help.</td>
</tr>
<tr>
  <td><code>Chat now!</code></td>
  <td><code>Image</code></td>
  <td>The container image for all Argo CD components. This overrides the <code>ARGOCD_IMAGE</code> environment variable.</td>
  <td><code>argoproj/argocd</code></td>
</tr>
<tr>
  <td><code>Ingress</code></td>
  <td>Ingress configuration options.</td>
  <td><code>__<Object>__</code></td>
  <td><code>InitialRepositories</code></td>
</tr>
<tr>
  <td>Initial Git repositories to configure Argo CD to use upon creation of the cluster.</td>
  <td><code>__<empty>__</code></td>
  <td><code>Notifications</code></td>
  <td>Notifications controller configuration options.</td>
</tr>
<tr>
  <td><code>__<Object>__</code></td>
  <td><ul><li><em><Enabled></em> - The toggle to start the notifications-controller.</li><li><em><Image></em> - The container image for all Argo CD components. This overrides the <code>ARGOCD_IMAGE</code> environment variable.</li><li><em><Version></em> - The tag to use with the Notifications container image.</li><li><em><Resources></em> - The container compute resources.</li><li><em><LogLevel></em> - The log level used by the Argo CD Application Controller component. Valid options are <code>debug</code>, <code>info</code>, <code>error</code>, and <code>warn</code>.</li></ul></td>
  <td><code>RepositoryCredentials</code></td>
  <td>Git repository credential templates to configure Argo CD to use upon creation of the cluster.</td>
</tr>
<tr>
  <td><code>__<empty>__</code></td>
  <td><code>InitialSSHKnownHosts</code></td>
  <td>Initial SSH Known Hosts for Argo CD to use upon creation of the cluster.</td>
  <td><code>__<default_Argo_CD_Known_Hosts>__</code></td>
</tr>
<tr>
  <td><code>KustomizeBuildOptions</code></td>
  <td>The build options and parameters to use with <code>kustomize build</code>.</td>
  <td><code>__<empty>__</code></td>
  <td><code>OIDCConfig</code></td>
</tr>
<tr>
  <td>The OIDC configuration as an alternative to Dex.</td>
  <td><code>__<empty>__</code></td>
  <td><code>NodePlacement</code></td>
  <td>Add the <code>nodeSelector</code> and the <code>tolerations</code>.</td>
</tr>
<tr>
  <td><code>__<empty>__</code></td>
  <td><code>Prometheus</code></td>
  <td>Prometheus configuration options.</td>
  <td><code>__<Object>__</code></td>
</tr>
<tr>
  <td><ul><li><em><Enabled></em> - Toggle Prometheus support globally for Argo CD.</li><li><em><Host></em> - The hostname to use for Ingress or Route resources.</li><li><em><Ingress></em> - Toggles Ingress for Prometheus.</li><li><em><Route></em> - Route configuration options.</li><li><em><Size></em> - The replica count for the Prometheus <code>StatefulSet</code>.</li></ul></td>
  <td><code>RBAC</code></td>
  <td>RBAC configuration options.</td>
  <td><code>__<Object>__</code></td>
</tr>
<tr>
  <td><ul><li><em><DefaultPolicy></em> - The <code>policy.default</code> property in the <code>argocd-rbac-cm</code> config map. The name of the default role which Argo CD will fall back to, when authorizing API requests.</li><li><em><Policy></em> - The <code>policy.csv</code> property in the <code>argocd-rbac-cm</code> config map. CSV data containing user-defined RBAC policies and role definitions.</li><li><em><Scopes></em> - The scopes property in the <code>argocd-rbac-cm</code> config map. Controls which OIDC scopes to examine during RBAC enforcement (in addition to sub scope).</li></ul></td>
  <td><code>Redis</code></td>
  <td>Redis configuration options.</td>
  <td><code>__<Object>__</code></td>
</tr>
<tr>
  <td><ul><li><em><AutoTLS></em> - Use the provider to create the Redis server's TLS certificate (one of: openshift). Currently only available for {{ product_title }}.</li><li><em><DisableTLSVerification></em> - Define whether the Redis server should be accessed using strict TLS validation.</li><li><em><Image></em> - The container image for Redis. This overrides the <code>ARGOCD_REDIS_IMAGE</code> environment variable.</li><li><em><Resources></em> - The container compute resources.</li><li><em><Version></em> - The tag to use with the Redis container image.</li></ul></td>
  <td><code>ResourceHealthChecks</code></td>
  <td>Customize resource health check behavior.</td>
  <td><code>__<empty>__</code></td>
</tr>
<tr>
  <td><code>ResourceIgnoreDifferences</code></td>
  <td>Customize resource ignore difference behavior.</td>
  <td><code>__<empty>__</code></td>
  <td><code>ResourceActions</code></td>
</tr>
<tr>
  <td>Customize resource action behavior.</td>
  <td><code>__<empty>__</code></td>
  <td><code>ResourceExclusions</code></td>
  <td>Completely ignore entire classes of resource group.</td>
</tr>
<tr>
  <td><code>__<empty>__</code></td>
  <td><code>ResourceInclusions</code></td>
  <td>The configuration to configure which resource group/kinds are applied.</td>
  <td><code>__<empty>__</code></td>
</tr>
<tr>
  <td><code>Server</code></td>
  <td>Argo CD Server configuration options.</td>
  <td><code>__<Object>__</code></td>
  <td><ul><li><em><Autoscale></em> - Server autoscale configuration options.</li><li><em><ExtraCommandArgs></em> - List of arguments added to the existing arguments set by the Operator.</li><li><em><GRPC></em> - GRPC configuration options.</li><li><em><Host></em> - The hostname used for Ingress or Route resources.</li><li><em><Ingress></em> - Ingress configuration for the Argo CD server component.</li><li><em><Insecure></em> - Toggles the insecure flag for Argo CD server.</li><li><em><Resources></em> - The container compute resources.</li><li><em><Replicas></em> - The number of replicas for the Argo CD server. Must be greater than or equal to <code>0</code>. If <code>Autoscale</code> is enabled, <code>Replicas</code> is ignored.</li><li><em><Route></em> - Route configuration options.</li><li><em><Service.Type></em> - The <code>ServiceType</code> used for the service resource.</li><li><em><LogLevel></em> - The log level to be used by the Argo CD Server component. Valid options are  <code>debug</code>, <code>info</code>, <code>error</code>, and <code>warn</code>.</li><li><em><LogFormat></em> - The log format used by the Argo CD Application Controller component. Valid options are <code>text</code> or <code>json</code>.</li><li><em><Env></em> - Environment to set for the server workloads.</li></ul></td>
</tr>
<tr>
  <td><code>SSO</code></td>
  <td>Single Sign-on options.</td>
  <td><code>__<Object>__</code></td>
  <td><ul><li><em><Image></em> - The container image for Keycloak. This overrides the <code>ARGOCD_KEYCLOAK_IMAGE</code> environment variable.</li><li><em><Keycloak></em> - Configuration options for Keycloak SSO provider.</li><li><em><Dex></em> - Configuration options for Dex SSO provider.</li><li><em><Provider></em> - The name of the provider used to configure Single Sign-on. For now the supported options are Dex and Keycloak.</li><li><em><Resources></em> - The container compute resources.</li><li><em><VerifyTLS></em> - Whether to enforce strict TLS checking when communicating with Keycloak service.</li><li><em><Version></em> - The tag to use with the Keycloak container image.</li></ul></td>
</tr>
<tr>
  <td><code>StatusBadgeEnabled</code></td>
  <td>Enable application status badge.</td>
  <td><code>true</code></td>
  <td><code>TLS</code></td>
</tr>
<tr>
  <td>TLS configuration options.</td>
  <td><code>__<Object>__</code></td>
  <td><ul><li><em><CA.ConfigMapName></em> - The name of the <code>ConfigMap</code> which contains the CA certificate.</li><li><em><CA.SecretName></em> - The name of the secret which contains the CA Certificate and Key.</li><li><em><InitialCerts></em> - Initial set of certificates in the <code>argocd-tls-certs-cm</code> config map for connecting Git repositories via HTTPS.</li></ul></td>
  <td><code>UserAnonyousEnabled</code></td>
</tr>
<tr>
  <td>Enable anonymous user access.</td>
  <td><code>true</code></td>
  <td><code>Version</code></td>
  <td>The tag to use with the container image for all Argo CD components.</td>
</tr>
<tr>
  <td>Latest Argo CD version</td>
  <td><code>Banner</code></td>
  <td>Add a UI banner message.</td>
  <td><code>__<Object>__</code></td>
</tr>
<tr>
  <td><ul><li><em><Banner.Content></em> - The banner message content (required if a banner is displayed).</li><li><em><Banner.URL.SecretName></em> - The banner message link URL (optional).</li></ul></td>
</tr>
</tbody>
</table>