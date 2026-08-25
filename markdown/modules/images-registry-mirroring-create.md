{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an image mirror configuration {id="images-registry-mirroring-create_{{ context }}"}

You can create an image mirror configuration for a {{ product_title }} cluster with the {{ rosa_cli_first }} tool. {._abstract}


:::important

The source registry cannot be modified after creation. You must delete and re-create the image mirror to change the source.

:::


**Procedure**

*   Run the following command to create an image mirror configuration:
    ```terminal
    $ rosa create image-mirror [arguments]
    ```

    **Arguments**

<table>
<tbody>
<tr>
  <td>Option</td>
  <td>Definition</td>
</tr>
<tr>
  <td>--cluster</td>
  <td>Required: The name or ID of the cluster the mirror configuration will be applied to.</td>
</tr>
<tr>
  <td>--source</td>
  <td>Required: The source registry that will be mirrored.</td>
</tr>
<tr>
  <td>--mirrors</td>
  <td>Required: List of mirror registries. Mirror registries must be comma-separated.</td>
</tr>
<tr>
  <td>--type=digest</td>
  <td>Optional: Type of image mirror. The <code>digest</code> type is set by default and the only available <code>type</code> option.</td>
</tr>
<tr>
  <td>--profile</td>
  <td>Optional: Specifies an AWS profile (string) from your credentials file.</td>
</tr>
<tr>
  <td>--region</td>
  <td>Optional:Specifies an AWS region, overriding the AWS_REGION environment variable.</td>
</tr>
</tbody>
</table>


    **Examples**

    Creates an image mirror configuration for a cluster named `mycluster`.
    ```terminal
    $ rosa create image-mirror --cluster=mycluster \
      --source=registry.example.com/team \
      --mirrors=mirror.corp.com/team,backup.corp.com/team
    ```
    ```terminal title="Example Output"
    I: Image mirror with ID 'abc123def456' has been created on cluster 'mycluster'
    I: Source: registry.example.com/team
    I: Mirrors: [mirror.corp.com/team backup.corp.com/team]
    ```

    :::note

    An ID is automatically generated and assigned to an image mirror during image mirror configuration creation.
    
    :::

*   Run the following command to create an image mirror configuration with a specific type:
    ```terminal
    $ rosa create image-mirror --cluster=mycluster \
      --type=digest --source=docker.io/library \
      --mirrors=internal-registry.company.com/dockerhub
    ```

    :::note

    The `digest` type is set by default and the only available `type` option.
    
    :::

*   Run the following command to create a single image mirror configuration with multiple mirrors for a cluster:
    ```terminal
    $ rosa create image-mirror --cluster=mycluster \
      --source=quay.io/openshift \
      --mirrors=mirror1.company.com/openshift,mirror2.company.com/openshift,mirror3.company.com/openshift
    ```