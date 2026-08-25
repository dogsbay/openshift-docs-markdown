# Security {id="ossm-config-security_{{ context }}"}

If your service mesh application is constructed with a complex array of microservices, you can use {{ SMProductName }} to customize the security of the communication between those services. The infrastructure of {{ product_title }} along with the traffic management features of {{ SMProductShortName }} help you manage the complexity of your applications and secure microservices.

**Before you begin**

If you have a project, add your project to the [`ServiceMeshMemberRoll` resource](/service_mesh/v2x/installing-ossm#ossm-member-roll-modify_installing-ossm).


:::note

After you add the namespace to the `ServiceMeshMemberRoll`, services or pods in that namespace will not be accessible to callers outside the service mesh.

:::