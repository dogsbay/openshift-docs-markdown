{%- set _mod_docs_content_type = "CONCEPT" %}
# About pod security admission {id="security-context-constraints-psa-about_{{ context }}"}

You can use pod security admission modes, such as `enforce`, `warn`, or `audit`, along with security profiles to restrict which pods run in your cluster. You can apply this control at both the global and namespace levels. {._abstract}

Globally, the `privileged` profile is enforced, and the `restricted` profile is used for warnings and audits.

You can also configure the pod security admission settings at the namespace level.

{% include "./snippets/default-projects.md" %}

## Pod security admission modes {id="psa-modes_{{ context }}"}

You can configure the following pod security admission modes for a namespace:

**Pod security admission modes**

<table>
<thead>
<tr>
  <th>Mode</th>
  <th>Label</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>enforce</code></td>
  <td><code>pod-security.kubernetes.io/enforce</code></td>
  <td>Rejects a pod from admission if it does not comply with the set profile</td>
</tr>
<tr>
  <td><code>audit</code></td>
  <td><code>pod-security.kubernetes.io/audit</code></td>
  <td>Logs audit events if a pod does not comply with the set profile</td>
</tr>
<tr>
  <td><code>warn</code></td>
  <td><code>pod-security.kubernetes.io/warn</code></td>
  <td>Displays warnings if a pod does not comply with the set profile</td>
</tr>
</tbody>
</table>

## Pod security admission profiles {id="psa-profiles_{{ context }}"}

You can set each of the pod security admission modes to one of the following profiles:

**Pod security admission profiles**

<table>
<thead>
<tr>
  <th>Profile</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>privileged</code></td>
  <td>Least restrictive policy; allows for known privilege escalation</td>
</tr>
<tr>
  <td><code>baseline</code></td>
  <td>Minimally restrictive policy; prevents known privilege escalations</td>
</tr>
<tr>
  <td><code>restricted</code></td>
  <td>Most restrictive policy; follows current pod hardening best practices</td>
</tr>
</tbody>
</table>

## Privileged namespaces {id="psa-privileged-namespaces_{{ context }}"}

The following system namespaces are always set to the `privileged` pod security admission profile:

*   `default`
*   `kube-public`
*   `kube-system`

You cannot change the pod security profile for these privileged namespaces.

```yaml title="Example privileged namespace configuration"
apiVersion: v1
kind: Namespace
metadata:
  labels:
    openshift.io/cluster-monitoring: "true"
    pod-security.kubernetes.io/enforce: privileged
    pod-security.kubernetes.io/audit: privileged
    pod-security.kubernetes.io/warn: privileged
  name: "<mig_namespace>"
# ...
```