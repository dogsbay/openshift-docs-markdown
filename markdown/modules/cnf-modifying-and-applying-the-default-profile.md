# Modifying and applying the default profile {id="cnf-modifying-and-applying-the-default-profile_{{ context }}"}

You can apply the profile manually or with the toolset of your choice, such as ArgoCD.


:::note

This procedure applies the DU profile step-by-step. If the profile is pulled together into a single project and applied in one step, issues will occur between the MCO and
the SRIOV operators if an Intel NIC is used for networking traffic. To avoid a race condition between the MCO and the SRIOV Operators, it is recommended that the DU application be applied in three steps:

1.  Apply the profile without SRIOV.
1.  Wait for the cluster to settle.
1.  Apply the SRIOV portion.

:::