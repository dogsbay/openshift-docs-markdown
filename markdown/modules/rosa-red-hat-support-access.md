{%- set _mod_docs_content_type = "REFERENCE" %}

# Red&#160;Hat support access {id="rosa-policy-rh-access_{{ context }}"}
Members of the Red&#160;Hat Customer Experience and Engagement (CEE) team typically have read-only access to parts of the cluster. Specifically, CEE has limited access to the core and product namespaces and does not have access to the customer namespaces.

| Role | Core namespace | Layered product namespace | Customer namespace | AWS account^*^ |
| --- |
| OpenShift SRE - Normal operations <sup>[1]</sup> |
| Read: All<br>Write: Very<br>limited |
| Read: All<br>Write: None |
| Read: None<br>Write: None |
| Read: None<br>Write: None |
| OpenShift SRE - Elevated Access <sup>[2]</sup> (Gated by [Approved Access](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws/4/html/support/approved-access)) |
| Read: All<br>Write: All |
| Read: All<br>Write: All |
| Read: All<br>Write: All |
| Read: All<br>Write: All |
| CEE |
| Read: All<br>Write: None |
| Read: All<br>Write: None |
| Read: None<br>Write: None |
| Read: None<br>Write: None |
| Customer administrator |
| Read: None<br>Write: None |
| Read: None<br>Write: None |
| Read: All<br>Write: All |
| Read: All<br>Write: All |
| Customer user |
| Read: None<br>Write: None |
| Read: None<br>Write: None |
| Read: Limited <sup>[3]</sup><br>Write: Limited <sup>[3]</sup> |
| Read: None<br>Write: None |
| Everybody else |
| Read: None<br>Write: None |
| Read: None<br>Write: None |
| Read: None<br>Write: None |
| Read: None<br>Write: None |

1.  Limited to addressing common use cases such as failing deployments, upgrading a cluster, and replacing bad worker nodes.
1.  Elevated access gives SRE the access levels of a `cluster-admin` role and is gated by Approved Access. For more information, see "Default cluster roles" and "Approved Access".
1.  Limited to what is granted through RBAC by the Customer Administrator and namespaces created by the user.