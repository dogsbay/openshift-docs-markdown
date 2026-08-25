# profiles parameters {id="ossm-cr-profiles_{{ context }}"}

You can create reusable configurations with `ServiceMeshControlPlane` object profiles. If you do not configure the `profile` setting, {{ SMProductName }} uses the default profile.

Here is an example that illustrates the `spec.profiles` parameter for the `ServiceMeshControlPlane` object:

```yaml title="Example profiles parameters"
apiVersion: maistra.io/v2
kind: ServiceMeshControlPlane
metadata:
  name: basic
spec:
  profiles:
  - YourProfileName
```