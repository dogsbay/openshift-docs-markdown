{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the Kernel Module Management Operator {id="kmm-configuring-kmmo_{{ context }}"}

To adapt the Kernel Module Management (KMM) Operator to your {{ product_title }} environment, you can create a `ConfigMap` with custom settings and restart the controller. {._abstract}

**Procedure**

*   To modify any setting, create a `ConfigMap` with the name `kmm-operator-manager-config` in the Operator namespace with the relevant data and restart the controller using the following command:
    ```terminal
    $ oc rollout restart -n "$namespace" deployment/kmm-operator-controller
    ```

    The value of `$namespace` depends on your installation method. For example:
    ```yaml
    apiVersion: v1
    data:
      controller_config.yaml: |
        worker:
          firmwareHostPath: /example/different/firmware/path
    kind: ConfigMap
    metadata:
      name: kmm-operator-manager-config
      namespace: openshift-kmm
    ```

    :::note

    If you want to configure `KMM Hub`, create the `ConfigMap` using the name `kmm-operator-hub-manager-config` in the KMM Hub controller’s namespace.
    
    :::


    ***Operator configuration parameters***

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>healthProbeBindAddress</code></td>
  <td>Defines the address on which the Operator monitors for kubelet health probes. The recommended value is <code>:8081</code>.</td>
</tr>
<tr>
  <td><code>job.gcDelay</code></td>
  <td>Defines the duration for which successful build pods should be preserved before they are deleted. For information about the valid values for this setting, see <a href="https://pkg.go.dev/time#ParseDuration">ParseDuration</a>. The default value is <code>0s</code>.</td>
</tr>
<tr>
  <td><code>leaderElection.enabled</code></td>
  <td>Determines whether leader election is used to ensure that only one replica of the KMM Operator is running at any time. For more information, see https://kubernetes.io/docs/concepts/architecture/leases/[Leases]. The default value is <code>true</code>.</td>
</tr>
<tr>
  <td><code>leaderElection.resourceID</code></td>
  <td>Determines the name of the resource that leader election uses for holding the leader lock. The default value for KMM is <code>kmm.sigs.x-k8s.io</code>. The default value for KMM-hub is <code>kmm-hub.sigs.x-k8s.io</code>.</td>
</tr>
<tr>
  <td><code>metrics.bindAddress</code></td>
  <td>Determines the bind address for the metrics server. Set this to "0" to disable the metrics server. The default value is <code>0.0.0.0:8443</code>.</td>
</tr>
<tr>
  <td><code>metrics.disableHTTP2</code></td>
  <td>If <code>true</code>, disables HTTP/2 for the metrics server as a mitigation for https://access.redhat.com/security/cve/cve-2023-44487[CVE-2023-44487]. The default value is <code>true</code>.</td>
</tr>
<tr>
  <td><code>metrics.enableAuthnAuthz</code></td>
  <td>Determines if metrics are authenticated using <code>TokenReviews</code> and authorized using <code>SubjectAccessReviews</code> with the kube-apiserver.<br><br>For authentication and authorization, the controller needs a <code>ClusterRole</code> with the following rules:<br><br><ul><li><code>apiGroups: authentication.k8s.io, resources: tokenreviews, verbs: create</code></li><li><code>apiGroups: authorization.k8s.io, resources: subjectaccessreviews, verbs: create</code></li></ul>To scrape metrics, for example, using Prometheus, the client needs a <code>ClusterRole</code> with the following rule:<br><br><ul><li><code>nonResourceURLs: "/metrics", verbs: get</code></li></ul>The default value is <code>true</code>.</td>
</tr>
<tr>
  <td><code>metrics.secureServing</code></td>
  <td>Determines whether the metrics are served over HTTPS instead of HTTP. The default value is <code>true</code>.</td>
</tr>
<tr>
  <td><code>webhook.disableHTTP2</code></td>
  <td>If <code>true</code>, disables HTTP/2 for the webhook server, as a mitigation for <a href="https://access.redhat.com/security/cve/cve-2023-44487">CVE-2023-44487</a>. The default value is <code>true</code>.</td>
</tr>
<tr>
  <td><code>webhook.port</code></td>
  <td>Defines the port on which the Operator monitors webhook requests. The default value is <code>9443</code>.</td>
</tr>
<tr>
  <td><code>worker.runAsUser</code></td>
  <td>Determines the value of the <code>runAsUser</code> field of the worker container's security context. For more information, see <a href="https://kubernetes.io/docs/tasks/configure-pod-container/security-context/">SecurityContext</a>. The default value is <code>9443</code>.</td>
</tr>
<tr>
  <td><code>worker.seLinuxType</code></td>
  <td>Determines the value of the <code>seLinuxOptions.type</code> field of the worker container's security context. For more information, see <a href="https://kubernetes.io/docs/tasks/configure-pod-container/security-context/">SecurityContext</a>. The default value is <code>spc_t</code>.</td>
</tr>
<tr>
  <td><code>worker.firmwareHostPath</code></td>
  <td>If set, the value of this field is written by the worker container into the /sys/module/firmware_class/parameters/path file on the node. For more information see <a href="https://openshift-kmm.netlify.app/documentation/firmwares/#setting-the-kernels-firmware-search-path">Setting the kernel's firmware search path</a>. The default value is <code>/var/lib/firmware</code>.</td>
</tr>
</tbody>
</table>