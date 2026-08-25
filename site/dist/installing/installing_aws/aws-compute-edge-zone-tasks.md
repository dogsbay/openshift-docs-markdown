---
title: AWS Local Zone or Wavelength Zone tasks
---

# AWS Local Zone or Wavelength Zone tasks {#aws-compute-edge-zone-tasks}

After you install OpenShift Container Platform on {{ aws_first }}, you can further configure {{ aws_short }} Local Zones or Wavelength Zones and an edge compute pool. Configure {{ aws_short }} networking, subnets, compute pools, security groups, and zone data so OpenShift Container Platform can create efficient, isolated edge compute nodes in {{ aws_short }} Local Zones or Wavelength Zones with correct placement, networking, and workload control.

**Additional resources**

- [{{ aws_short }} Local Zones features ({{ aws_short }} documentation)](https://aws.amazon.com/about-aws/global-infrastructure/localzones/features/)
- [{{ aws_short }} Wavelength features ({{ aws_short }} documentation)](https://aws.amazon.com/wavelength/features/)

**Additional resources**

- [How {{ aws_short }} Local Zones work ({{ aws_short }} documentation)](https://docs.aws.amazon.com/local-zones/latest/ug/how-local-zones-work.html)
- [How {{ aws_short }} Wavelength works ({{ aws_short }} documentation)](https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html)

**Additional resources**

- [Installing a cluster on AWS with compute nodes on AWS Local Zones](/openshift-docs-markdown/installing/installing_aws/ipi/installing-aws-localzone#installing-aws-localzone)
- [Installing a cluster on AWS with compute nodes on AWS Wavelength Zones](/openshift-docs-markdown/installing/installing_aws/ipi/installing-aws-wavelength-zone#installing-aws-wavelength-zone)
- [Understanding taints and tolerations](/openshift-docs-markdown/nodes/scheduling/nodes-scheduler-taints-tolerations#nodes-scheduler-taints-tolerations-about_nodes-scheduler-taints-tolerations)
- [Installing the AWS Load Balancer Operator](/openshift-docs-markdown/networking/networking_operators/aws_load_balancer_operator/install-aws-load-balancer-operator#install-aws-load-balancer-operator_install-aws-load-balancer-operator)
