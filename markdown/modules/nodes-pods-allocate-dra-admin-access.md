{%- set _mod_docs_content_type = "REFERENCE" %}
# About DRA admin access {id="nodes-pods-allocate-dra-admin-access_{{ context }}"}

When working with Dynamic Resource Allocation (DRA), as a cluster administrator you can gain privileged access to a device that is in use by other users, so that you can perform tasks such as monitoring the health and status of the device while ensuring that users can continue to use the device. {._abstract}

To gain admin access, an administrator must create a resource claim or resource claim template with the `adminAccess: true` parameter in a namespace that includes the `resource.kubernetes.io/admin-access: "true"` label. Non-administrator users cannot access namespaces with this label. 

```yaml title="Example namespace with admin access label"
apiVersion: v1
kind: Namespace
metadata:
  labels:
    resource.kubernetes.io/admin-access: "true"
# ...
```

In the following example, the administrator is granted access to the `2g-10gb` device:

```yaml title="Example resource claim object with admin access"
apiVersion: resource.k8s.io/v1
kind: ResourceClaimTemplate
metadata:
  name: large-black-cat-claim-template
spec:
  devices:
    requests:
    - name: req-0
      exactly:
        allocationMode: All
        adminAccess: true
        deviceClassName: example-device-class
        selectors:
        - cel:
            expression: "device.attributes['driver.example.com'].profile == '2g.10gb'"
```
where:


`spec.devices.requests.exactly.adminAccess.true` or `spec.devices.requests.firstAvailable.adminAccess.true`
:   Specifies that the admin access mode is enabled for the specified device.

For information on adding a resource claim to a pod, see "Adding resource claims to pods".