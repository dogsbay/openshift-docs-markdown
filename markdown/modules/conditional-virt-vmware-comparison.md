{%- set _mod_docs_content_type = "REFERENCE" %}
# VMware vSphere to {{ VirtProductName }} concept mapping {id="conditional-virt-vmware-comparison_{{ context }}"}

If you are familiar with VMware vSphere, you can map its concepts to the {{ VirtProductName }} components that accomplish similar tasks. {._abstract}

However, because {{ VirtProductName }} is conceptually different from vSphere, and much of its functionality comes from the underlying {{ product_title }}, {{ VirtProductName }} does not have direct alternatives for all vSphere concepts or components.

**Mapping of vSphere concepts to their closest {{ VirtProductName }} counterparts**

<table>
<tbody>
<tr>
  <td>vSphere concept</td>
  <td>{{ VirtProductName }}</td>
  <td>Explanation</td>
</tr>
<tr>
  <td>Datastore</td>
  <td>Persistent volume (PV)<br><br>Persistent volume claim (PVC)</td>
  <td>Stores VM disks. A PV represents existing storage and is attached to a VM through a PVC. When created with the <code>ReadWriteMany</code> (RWX) access mode, PVCs can be mounted by multiple VMs simultaneously.</td>
</tr>
<tr>
  <td>Dynamic Resource Scheduling (DRS)</td>
  <td>Pod eviction policy<br><br>Descheduler</td>
  <td>Provides active resource balancing. A combination of pod eviction policies and a descheduler allows VMs to be live migrated to more appropriate nodes to keep node resource utilization manageable.</td>
</tr>
<tr>
  <td>NSX</td>
  <td>Multus OVN-Kubernetes<br><br>Third-party container network interface (CNI) plug-ins</td>
  <td>Provides an overlay network configuration. There is no direct equivalent for NSX in {{ VirtProductName }}, but you can use the OVN-Kubernetes network provider or install certified third-party CNI plug-ins.</td>
</tr>
<tr>
  <td>Storage Policy Based Management (SPBM)</td>
  <td>Storage class</td>
  <td>Provides policy-based storage selection. Storage classes represent various storage types and describe storage capabilities, such as quality of service, backup policy, reclaim policy, and whether volume expansion is allowed. A PVC can request a specific storage class to satisfy application requirements.</td>
</tr>
<tr>
  <td>vCenter<br><br>vRealize Operations</td>
  <td>OpenShift Metrics and Monitoring</td>
  <td>Provides host and VM metrics. You can view metrics and monitor the overall health of the cluster and VMs by using the {{ product_title }} web console.</td>
</tr>
<tr>
  <td>vMotion</td>
  <td>Live migration</td>
  <td>Moves a running VM to another node without interruption. For live migration to be available, the PVC attached to the VM must have the <code>ReadWriteMany</code> (RWX) access mode.</td>
</tr>
<tr>
  <td>vSwitch<br><br>DvSwitch</td>
  <td>NMState Operator<br><br>Multus</td>
  <td>Provides a physical network configuration. You can use the NMState Operator to apply state-driven network configuration and manage various network interface types, including Linux bridges and network bonds. With Multus, you can attach multiple network interfaces and connect VMs to external networks.</td>
</tr>
</tbody>
</table>