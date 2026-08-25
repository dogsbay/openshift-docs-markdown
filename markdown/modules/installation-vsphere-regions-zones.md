{%- set _mod_docs_content_type = "CONCEPT" %}
# VMware vSphere region and zone enablement {id="installation-vsphere-regions-zones_{{ context }}"}

You can deploy an {{ product_title }} cluster to multiple vSphere data centers. Each data center can run multiple clusters. This configuration reduces the risk of a hardware failure or network outage that can cause your cluster to fail.  {._abstract}

To enable regions and zones, you must define multiple failure domains for your {{ product_title }} cluster.


:::important

The VMware vSphere region and zone enablement feature requires the vSphere Container Storage Interface (CSI) driver as the default storage driver in the cluster. As a result, the feature is only available on a newly installed cluster.

For a cluster that was upgraded from a previous release, you must enable CSI automatic migration for the cluster. You can then configure multiple regions and zones for the upgraded cluster.

:::


The default installation configuration deploys a cluster to a single vSphere data center. If you want to deploy a cluster to multiple vSphere data centers, you must create an installation configuration file that enables the region and zone feature.

The default `install-config.yaml` file includes `vcenters` and `failureDomains` fields, where you can specify multiple vSphere data centers and clusters for your {{ product_title }} cluster. You can use the default `failureDomains` from `install-config.yaml` if you want to install an {{ product_title }} cluster in a vSphere environment that consists of single data center.

The following list describes terms associated with defining zones and regions for your cluster:

*   Failure domain: Establishes the relationships between a region and zone. You define a failure domain by using vCenter objects, such as a `datastore` object. A failure domain defines the vCenter location for {{ product_title }} cluster nodes.
*   Region: Specifies a vCenter data center. You define a region by using a tag from the  `openshift-region` tag category.
*   Zone: Specifies a vCenter cluster. You define a zone by using a tag from the `openshift-zone` tag category.


:::note

If you plan on specifying more than one failure domain in your `install-config.yaml` file, you must create tag categories, zone tags, and region tags in advance of creating the configuration file.

:::


You must create a vCenter tag for each vCenter data center, which represents a region. Additionally, you must create a vCenter tag for each cluster than runs in a data center, which represents a zone. After you create the tags, you must attach each tag to their respective data centers and clusters.

The following table outlines an example of the relationship among regions, zones, and tags for a configuration with multiple vSphere data centers running in a single VMware vCenter.

<table>
<thead>
<tr>
  <th>Data center (region)</th>
  <th>Cluster (zone)</th>
  <th>Tags</th>
</tr>
</thead>
<tbody>
<tr>
  <td>.4+</td>
  <td>us-east .2+</td>
  <td>us-east-1</td>
</tr>
<tr>
  <td>us-east-1a</td>
  <td>us-east-1b.2+</td>
  <td>us-east-2</td>
</tr>
<tr>
  <td>us-east-2a</td>
  <td>us-east-2b<br><br>.4+</td>
  <td>us-west</td>
</tr>
<tr>
  <td>.2+</td>
  <td>us-west-1</td>
  <td>us-west-1a</td>
</tr>
<tr>
  <td>us-west-1b .2+</td>
  <td>us-west-2</td>
  <td>us-west-2a</td>
</tr>
<tr>
  <td>us-west-2b</td>
</tr>
</tbody>
</table>