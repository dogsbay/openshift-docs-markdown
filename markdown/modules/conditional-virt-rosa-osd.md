{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ VirtProductName }} on {{ product_title }} {id="virt-rosa-osd_{{ context }}"}

You can run {{ VirtProductName }} on an {{ product_title }} cluster. {._abstract}

Before you set up your cluster, review the following summary of supported features and limitations:


Installing
:   *   You can install the cluster by using installer-provisioned infrastructure, ensuring that you specify bare-metal instance types for the worker nodes.
    For example, you can use the
    `c5n.metal`
    type value for a machine based on x86_64 architecture.


Accessing virtual machines (VMs)
:   *   There is no change to how you access VMs by using the `virtctl` CLI tool or the {{ product_title }} web console.
    *   You can expose VMs by using a `NodePort` or `LoadBalancer` service.

    :::note


    The load balancer approach is preferable because {{ product_title }} automatically creates the load balancer in
    AWS
    and manages its lifecycle. A security group is also created for the load balancer, and you can use annotations to attach existing security groups. When you remove the service, {{ product_title }} removes the load balancer and its associated resources.
    
    :::



Storage
:   *   You can use any storage solution that is certified by the storage vendor to work with the underlying platform.

    :::important


    AWS bare metal, Red&#160;Hat OpenShift Service on AWS, and Red&#160;Hat OpenShift Service on AWS classic architecture clusters might have different supported storage solutions. Ensure that you confirm support with your storage vendor.
    
    :::

    *   Using Amazon Elastic File System (EFS) or Amazon Elastic Block Store (EBS) with {{ VirtProductName }} might cause performance and functionality limitations as shown in the following table:

    **EFS and EBS performance and functionality limitations**

<table>
<thead>
<tr>
  <th>Feature</th>
  <th colspan="3">EBS volume</th>
  <th>EFS volume</th>
  <th>Shared storage solutions</th>
</tr>
</thead>
<tbody>
<tr>
  <td></td>
  <td><strong>gp2</strong></td>
  <td><strong>gp3</strong></td>
  <td><strong>io2</strong></td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td>VM live migration</td>
  <td>Not available</td>
  <td>Not available</td>
  <td>Available</td>
  <td>Available</td>
  <td>Available</td>
</tr>
<tr>
  <td>Fast VM creation by using cloning</td>
  <td colspan="3">Available</td>
  <td>Not available</td>
  <td>Available</td>
</tr>
<tr>
  <td>VM backup and restore by using snapshots</td>
  <td colspan="3">Available</td>
  <td>Not available</td>
  <td>Available</td>
</tr>
</tbody>
</table>


    Consider using CSI storage, which supports ReadWriteMany (RWX), cloning, and snapshots to enable live migration, fast VM creation, and VM snapshots capabilities.