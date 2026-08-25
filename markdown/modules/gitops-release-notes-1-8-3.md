{%- set _mod_docs_content_type = "REFERENCE" %}
# Release notes for {{ gitops_title }} 1.8.3 {id="gitops-release-notes-1-8-3_{{ context }}"}

{{ gitops_title }} 1.8.3 is now available on {{ product_title }} 4.10, 4.11, 4.12, and 4.13.

## Errata updates {id="errata-updates-1-8-3_{{ context }}"}

### RHBA-2023:3206 and RHSA-2023:3229 - {{ gitops_title }} 1.8.3 security update advisory {id="_rhba-20233206_and_rhsa-20233229_-_gitops_title_183_security_update_advisory"}

Issued: 2023-05-18

The list of security fixes that are included in this release is documented in the following advisories:

*   [RHBA-2023:3206](https://access.redhat.com/errata/RHBA-2023:3206)
*   [RHSA-2023:3229](https://access.redhat.com/errata/RHSA-2023:3229)

If you have installed the {{ gitops_title }} Operator, run the following command to view the container images in this release:

```terminal
$ oc describe deployment gitops-operator-controller-manager -n openshift-operators
```

## Fixed issues {id="fixed-issues-1-8-3_{{ context }}"}

*   Before this update, when `Autoscale` was enabled and the horizontal pod autoscaler (HPA) controller tried to edit the replica settings in server deployment, the Operator overwrote it. In addition, any changes specified to the autoscaler parameters were not propagated correctly to the HPA on the cluster. This update fixes the issue. Now the Operator reconciles on replica drift only if `Autoscale` is disabled and the HPA parameters are updated correctly. [GITOPS-2629](https://issues.redhat.com/browse/GITOPS-2629)