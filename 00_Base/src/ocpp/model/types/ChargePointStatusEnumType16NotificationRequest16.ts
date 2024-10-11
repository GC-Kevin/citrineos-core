// Copyright 2023 S44, LLC
// Copyright Contributors to the CitrineOS Project
//
// SPDX-License-Identifier: Apache 2.0

/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import {
  ChargePointErrorCodeEnumType16,
  ChargePointStatusEnumType16,
} from '../enums';
import { OcppRequest } from '../../..';

export interface ChargePointStatusEnumType16NotificationRequest16
  extends OcppRequest {
  connectorId: number;
  errorCode: ChargePointErrorCodeEnumType16;
  info?: string | null;
  status: ChargePointStatusEnumType16;
  timestamp?: string | null;
  vendorId?: string | null;
  vendorChargePointErrorCodeEnumType16?: string | null;
}
