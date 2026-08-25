{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing hosts on Amazon Web Services in an installer-provisioned infrastructure cluster {id="accessing-hosts-on-aws_{{ context }}"}

The {{ product_title }} installer does not create any public IP addresses for any of the Amazon Elastic Compute Cloud (Amazon EC2) instances that it provisions for your {{ product_title }} cluster. After you provisioned your Amazon EC2 instance, you can use SSH to access your {{ product_title }} hosts. {._abstract}

**Procedure**

1.  Create a security group that allows SSH access into the virtual private cloud (VPC) that the `openshift-install` command-line interface creates.
1.  Create an Amazon EC2 instance on one of the public subnets the installation program created.
1.  Associate a public IP address with the Amazon EC2 instance that you created.

    Unlike with the {{ product_title }} installation, associate the Amazon EC2 instance you created with an SSH keypair. The operating system selection is not important for this instance, because the instanace serves as an SSH bastion to bridge the internet into the VPC of your {{ product_title }} cluster. The Amazon Machine Image (AMI) you use does matter. With {{ op_system_first }}, for example, you can provide keys through Ignition by using a similar method to the installation program.
1.  After you provisioned your Amazon EC2 instance and can SSH into the instance, add the SSH key that you associated with your {{ product_title }} installation. This key can be different from the key for the bastion instance, but this is not a strict requirement.

    :::note

    Use direct SSH access only for disaster recovery. When the Kubernetes API is responsive, run privileged pods instead.
    
    :::

1.  Run `oc get nodes`, inspect the output, and choose one of the nodes that is a control plane. The hostname looks similar to `ip-10-0-1-163.ec2.internal`.
1.  From the bastion SSH host that you manually deployed into Amazon EC2, SSH into that control plane host by entering the following command. Ensure that you use the same SSH key that you specified during installation:
    ```terminal
    $ ssh -i <ssh-key-path> core@<control_plane_hostname>
    ```