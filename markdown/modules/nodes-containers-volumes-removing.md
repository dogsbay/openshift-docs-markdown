{%- set _mod_docs_content_type = "REFERENCE" %}
# About removing volumes and volume mounts from a pod {id="nodes-containers-volumes-removing_{{ context }}"}

You can remove a volume or volume mount from a pod. {._abstract}

You can remove a volume from a pod template by running the following command:

```terminal
$ oc set volume <object_type>/<name> --remove [options]
```

**Supported options for removing volumes**

<table>
<thead>
<tr>
  <th>Option</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Description</td>
</tr>
<tr>
  <td>Default</td>
</tr>
<tr>
  <td><code>--name</code></td>
</tr>
<tr>
  <td>Name of the volume.</td>
</tr>
<tr>
  <td></td>
</tr>
<tr>
  <td><code>-c, --containers</code></td>
</tr>
<tr>
  <td>Select containers by name. It can also take wildcard <code>'*'</code> that matches any character.</td>
</tr>
<tr>
  <td><code>'*'</code></td>
</tr>
<tr>
  <td><code>--confirm</code></td>
</tr>
<tr>
  <td>Indicate that you want to remove multiple volumes at once.</td>
</tr>
<tr>
  <td></td>
</tr>
<tr>
  <td><code>-o, --output</code></td>
</tr>
<tr>
  <td>Display the modified objects instead of updating them on the server. Supported values: <code>json</code>, <code>yaml</code>.</td>
</tr>
<tr>
  <td></td>
</tr>
<tr>
  <td><code>--output-version</code></td>
</tr>
<tr>
  <td>Output the modified objects with the given version.</td>
</tr>
<tr>
  <td><code>api-version</code></td>
</tr>
</tbody>
</table>

For example:

*   To remove a volume **v1** from the `DeploymentConfig` object **d1**:
    ```terminal
    $ oc set volume dc/d1 --remove --name=v1
    ```
*   To unmount volume **v1** from container **c1** for the `DeploymentConfig` object **d1** and remove the volume **v1** if it is not referenced by any containers on **d1**:
    ```terminal
    $ oc set volume dc/d1 --remove --name=v1 --containers=c1
    ```
*   To remove all volumes for replication controller **r1**:
    ```terminal
    $ oc set volume rc/r1 --remove --confirm
    ```